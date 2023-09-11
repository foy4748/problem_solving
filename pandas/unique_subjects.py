import pandas as pd

def count_unique_subjects(teacher: pd.DataFrame) -> pd.DataFrame:
    df = teacher.groupby('teacher_id')['subject_id'].nunique()
    result = df.reset_index()
    return result.rename(columns={'subject_id':'cnt'})

csv = pd.read_csv('./csv/teachers.csv')
df  = pd.DataFrame(csv)

print(count_unique_subjects(df))
