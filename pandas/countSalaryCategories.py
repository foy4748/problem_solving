import pandas as pd

def count_salary_categories(accounts: pd.DataFrame) -> pd.DataFrame:
    # Initialize
    data = {
            "category":["Low Salary","Average Salary","High Salary"],
            "accounts_count":[0,0,0]
    }

    # Iterating Through
    for idx, row in accounts.iterrows():
        income = row['income']

        if(income < 20000):
            data['accounts_count'][0] = data['accounts_count'][0] + 1
            continue

        if income >= 20000 and income <= 50000:
            data['accounts_count'][1] = data['accounts_count'][1] + 1
            continue

        if income > 50000:
            data['accounts_count'][2] = data['accounts_count'][2] + 1
            continue

    return pd.DataFrame(data)

csv = pd.read_csv('./csv/accounts.csv')
df  = pd.DataFrame(csv)
print(count_salary_categories(df))
