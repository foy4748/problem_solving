import pandas as pd

def game_analysis(activity: pd.DataFrame) -> pd.DataFrame:
    activity.sort_values(by='event_date',ascending=True,inplace=True)
    activity.drop_duplicates(subset='player_id',keep='first',inplace=True)
    result = activity.sort_values(by='player_id')
    renames = {'event_date':'first_login'}
    return result.rename(columns=renames)[['player_id','first_login']]


csv = pd.read_csv('./csv/game_played.csv')
print(game_analysis(pd.DataFrame(csv)))
