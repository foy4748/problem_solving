import pandas as pd

def find_classes(courses: pd.DataFrame) -> pd.DataFrame:
    df = courses.groupby('class')['student'].count().reset_index()
    return df[ df['student'] >= 5 ][['class']]

csv = pd.read_csv('./csv/students.csv')
df  = pd.DataFrame(csv)

print(find_classes(df))
