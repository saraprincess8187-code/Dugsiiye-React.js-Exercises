import UserCard from './UserCard';

function App() {

  const name = 'Kafia';
  const email = 'kafia@gmail.com';
  return (
    <>
      <UserCard name = {name}
       email = {email} />

       <UserCard name = "Sacdia Ahmed"
       email = "Sacdia.Ahmed@gmail.com" />

       <UserCard name = "Aatika Umar"
       email = "Aatika.Umar@gmail.com" />
    </>
  );
}

export default App; 