
import pandas as pd
import seaborn as sns

def upload():
    train_data = pd.read_csv('train.csv')
    test_data = pd.read_csv('test.csv')
    return train_data, test_data

def histogram(data,variable):
    sns_plot = sns.displot(data, x=variable)
    sns_plot.savefig('histogram1.png')

train_data, test_data = upload()
histogram(train_data, "education")