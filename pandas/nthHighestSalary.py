import pandas as pd

def nth_highest_salary(employee: pd.DataFrame, N: int) -> pd.DataFrame:
    output_df = employee.sort_values(by='salary', ascending=False)
    try:
        renames = { 'salary': f'getNthHighestSalary({N})' }
        result = output_df.drop_duplicates(subset='salary',keep='first').iloc[[N-1]][['salary']]
        return result.rename(columns=renames)
    except Exception as e:
        data = [ {f'getNthHighestSalary({N})': 'null'} ]
        return pd.DataFrame(data)

df = pd.read_csv('./csv/salaries.csv')
print(nth_highest_salary(df, 4))

