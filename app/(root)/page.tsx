import HeaderBox from '@/components/HeaderBox'  
import TotalBalanceBox from '@/components/TotalBalanceBox'  

const Home = () => {

  const loggedIn = {firstName: 'Louai'}
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
        </header>

        <TotalBalanceBox 
        accounts={[]}
        totalBanks={0}
        totalCurrentBalance={1250.35}
        />
        
       </div>
    </section>
  )
}

export default Home