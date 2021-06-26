#https://github.com/adehaan/herheckathon
import pandas as pd
import seaborn as sns

def upload():
    train_data = pd.read_csv('/home/telegrace/Documents/CODING_JS/co-op/herhackathon-2021/biases-gotta-catch-em-all/data/train.csv')
    test_data = pd.read_csv('/home/telegrace/Documents/CODING_JS/co-op/herhackathon-2021/biases-gotta-catch-em-all/data/test.csv')
    return train_data, test_data

def histogram(data,variable):
    sns_plot = sns.displot(data, x=variable)
    sns_plot.savefig('/home/telegrace/Documents/CODING_JS/co-op/herhackathon-2021/biases-gotta-catch-em-all/data/histogram1.png')
    print("success")

train_data, test_data = upload()
histogram(train_data, "education")