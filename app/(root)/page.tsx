import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user'
import { redirect } from 'next/navigation'

const Home = async () => {
  const loggedIn = await getLoggedInUser()

  if (!loggedIn) redirect('/sign-in')

  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome to your dashboard"
            user={loggedIn?.firstName || 'User'}
            subtext="Access your account and manage your transactions"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={0}
            totalCurrentBalance={1250.35}
          />
        </header>
        Recent Transactions
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[]} />
    </section>
  )
}

export default Home