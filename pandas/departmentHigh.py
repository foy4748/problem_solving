import pandas as pd

def department_highest_salary(employee: pd.DataFrame, department: pd.DataFrame) -> pd.DataFrame:
    # Mergin Two Tables
    employee = employee.merge(department, left_on='departmentId', right_on='id',suffixes=('_employee', '_department'))


    # Filtering
    filtered = employee.groupby('departmentId').apply(lambda x: x[ x['salary'] == x['salary'].max() ])

    # Renaming
    renames = {'name_department':'Department','name_employee':'Employee','salary':'Salary'}
    result_df = filtered.rename(columns=renames)
    return result_df[['Department','Employee','Salary']]


employees = pd.read_csv('./csv/department_employee.csv')
departments = pd.read_csv('./csv/department_employee_departments.csv')
print(department_highest_salary(employees , departments))
