import pandas as pd
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.naive_bayes import GaussianNB
import json

import collections
from sklearn.metrics import recall_score, f1_score, precision_score, accuracy_score
from sklearn import preprocessing

from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.ensemble import RandomForestClassifier

def upload():
    train_data = pd.read_csv('/home/telegrace/Documents/CODING_JS/co-op/herhackathon-2021/biases-gotta-catch-em-all/data/train.csv')
    test_data = pd.read_csv('/home/telegrace/Documents/CODING_JS/co-op/herhackathon-2021/biases-gotta-catch-em-all/data/test.csv')
    return train_data, test_data

def normalization(data):
    data_normalized = data.copy()
    for i in range(len(data.columns)):
        if data[data.columns[i]].dtype !='int64' and data[data.columns[i]].dtype !='bool':
            feat = data.columns[i]
            data_normalized[feat] = data_normalized[feat]/data_normalized[feat].abs().max()
    return data_normalized


#MODELS

def split_data(data):
    data_wlabel = data.loc[:,data.columns != 'default']
    label = data['default']
    return data_wlabel, label


# Naive Bayes
def nb_model(train_data, test_data):
    gnb = GaussianNB()
    X, label = split_data(train_data)
    Y, real = split_data(test_data)
    gaus_pred = gnb.fit(X, label)
    predict = gaus_pred.predict(Y)
    wrong = (real != predict).sum()
    return real, predict

# Logistic Regression
def logistic_reg_model(train_data, test_data):
    logmodel = LogisticRegression()
    X, label = split_data(train_data)
    Y, real = split_data(test_data)
    log_pred = logmodel.fit(X, label)
    predict = log_pred.predict(Y)
    wrong = (real != predict).sum()
    return real, predict

# Random Forest
def rf_model(train_data, test_data):
    X, label = split_data(train_data)
    Y, real = split_data(test_data)
    clf = RandomForestClassifier(max_depth=5, random_state=1)
    clf.fit(X, label)
    predict = clf.predict(Y)
    return real, predict

# # Nearest Centroid
# def nc_model(train_data, test_data):
#     nearest_centroid = NearestCentroid()
#     nearest_centroid.fit(weighting_data_train, weighting_target_train)
#     predictions = nearest_centroid.predict(weighting_data_test)
#     print("nearest_centroid: acc: {}".format(accuracy_score(weighting_target_test, predictions)))


# SVN
def svm_model(train_data, test_data):
    X, label = split_data(train_data)
    Y, real = split_data(test_data)
    clf = svm.SVC()
    clf.fit(X, label)
    predict = clf.predict(Y)
    return real, predict
#kNN
def knn_model(train_data, test_data):
    X, label = split_data(train_data)
    Y, real = split_data(test_data)  
    clf = KNeighborsClassifier(n_neighbors=3, weights = 'distance')
    clf.fit(X, label)
    predict = clf.predict(Y)
    return real, predict


# evaluation function
def evaluation_model(real, predict):
    acc = accuracy_score(real, predict)
    recall = recall_score(real, predict, average='weighted')
    precision = precision_score(real, predict, average='weighted')
    f1 = f1_score(real, predict, average='weighted')
    return acc, recall, precision, f1

#-----------------------------------------------------

def run_model(model, train_data, test_data):
    # runs models & create predictions
    if model == 'nb_model':
        real, predict = rf_model(train_data, test_data)
    if model == 'logistic':
        real, predict = logistic_reg_model(train_data, test_data)
    if model == 'randomf':
        real, predict = rf_model(train_data, test_data)
    if model == 'svn':
        real, predict = rf_model(train_data, test_data)

    # evaluates model
    acc, recall, precision, f1 = evaluation_model(real, predict)

    return acc, recall, precision, f1, real, predict


# Calculating Differences in Prediction
def check_diff_sex(test_data2):
    test_data2['predict']=pd.Series(predict)
    women_f = test_data2.loc[(test_data2["default"] != test_data2["predict"]) & test_data2["sex"]==1]
    men_f = test_data2.loc[(test_data2["default"] != test_data2["predict"]) & test_data2["sex"]==0]
    test_data2 = test_data2.drop(['predict'], axis=1)
    return test_data2, women_f.shape[0], men_f.shape[0]

def check_diff_minority(test_data2):
    test_data2['predict']=pd.Series(predict)
    min_f = test_data2.loc[(test_data2["default"] != test_data2["predict"]) & test_data2["minority"]==1]
    notmin_f = test_data2.loc[(test_data2["default"] != test_data2["predict"]) & test_data2["minority"]==0]
    test_data2 =test_data2.drop(['predict'], axis=1)
    return test_data2, min_f.shape[0], notmin_f.shape[0]


# Rerun Models on Female subset or Male subset
# 1 Female
def model_female(test_data2, train_data2):
    train_data_female = train_data2.loc[train_data2["sex"]==1]
    test_data_female = test_data2.loc[test_data2["sex"]==1]
    #test_data2 = test_data2.drop(['predict'], axis=1, inplace=True)
    f_acc, f_recall, f_precision, f_f1, f_real, f_predict = run_model(model,train_data_female, test_data_female)
    return f_acc, f_recall, f_precision, f_f1, f_real, f_predict

# 2 Male
def model_male(test_data2, train_data2):
    train_data_male = train_data2.loc[train_data2["sex"]==0]
    test_data_male = test_data2.loc[test_data2["sex"]==0]
    #test_data2 = test_data2.drop(['predict'], axis=1)
    m_acc, m_recall, m_precision, m_f1, m_real, m_predict = run_model(model,train_data_male, test_data_male)
    return m_acc, m_recall, m_precision, m_f1, m_real, m_predict



#-------------------------------------------------------

#PREPROCESSING

# STEP 1 upload
train_data, test_data = upload()

# STEP 2 cleanup
cleanup_nums = {"ZIP":     {"MT01RA": 0, "MT15PA": 1, "MT04PA":2, "MT12RA":3},
                "occupation": {"MZ10CD": 0, "MZ01CD": 1, "MZ11CD": 2}}
train_data2 = train_data.replace(cleanup_nums)
test_data2 = test_data.replace(cleanup_nums)
test_data2 = test_data2.drop(['Unnamed: 0.1', 'Unnamed: 0'], axis=1)
train_data2 = train_data2.drop(['Unnamed: 0'], axis=1)

# STEP 3 Normalization
train_data2 = normalization(train_data2)
test_data2 = normalization(test_data2)

# STEP 4: Train Model
# AT THE MOMENT: hardcode which model to use
# FUTURE: Include Button in Front-End to choose Model or run all and compare
model = 'randomf'

# STEP 5 Run and Evaluate Model
acc, recall, precision, f1, real, predict = run_model(model, train_data2, test_data2)

# STEP 6 Check for Biases
test_data2, women_f, men_f = check_diff_sex(test_data2)
test_data2, min_f, notmin_f = check_diff_minority(test_data2)

# STEP 7 Rerun Models on female and male only
m_acc, m_recall, m_precision, m_f1, m_real, m_predict = model_male(test_data2, train_data2)
f_acc, f_recall, f_precision, f_f1, f_real, f_predict = model_female(test_data2, train_data2)

# TODO: CREATE JSON FILE FOR THESE NUMBERS

info = {'General_model': {'name': 'All', 'acc':acc, 'recall': recall, 'precision': precision, 'f1': f1}, 
        'Male_model': {'name':'male', 'acc': m_acc, 'recall': m_recall, 'precision': m_precision, 'f1':m_f1},
        'Female_model': {'name':'Female', 'acc': f_acc, 'recall': f_recall, 'precision': f_precision,'f1':f_f1},
        'women_f': women_f, 'men_f': men_f, 'min_f': min_f, 'notmin_f':notmin_f}

# GRACE changed acc, recall, precision to all be the same var_name

with open('info.json', 'w') as outfile:
    json.dump(info, outfile)

print("Analysis Success")