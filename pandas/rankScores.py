import pandas as pd

def order_scores(scores: pd.DataFrame) -> pd.DataFrame:

    sorted_df = scores.sort_values(by='score', ascending=False,ignore_index=True)

    # Initializing
    ranks = list()
    rank = 1

    # Calculating Ranks O(n)
    for idx,row in sorted_df.iterrows():
        if idx == 0:
            ranks.append(rank)
            continue
        if row['score'] == sorted_df.loc[idx-1]['score']:
            ranks.append(rank)
        else:
            rank = rank + 1
            ranks.append(rank)

    # Inserting Ranks in 'rank' column
    sorted_df['rank'] = ranks

    return sorted_df[['score','rank']]

csv = pd.read_csv('./csv/scores.csv')
df  = pd.DataFrame(csv)

print(order_scores(df))
#order_scores(df)
