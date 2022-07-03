import user from '../data/user';
import statsData from '../data/statsData';
import friends from '../data/friends';
import transactions from '../data/transactions';

import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionsTable from 'components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Profile {...user} /> */}
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList items={friends} />
      <TransactionsTable items={transactions} />
    </div>
  );
}