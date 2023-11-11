import { SingUpForm } from '../components/Counter/Counter';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: 20,
      }}
    >
      <SingUpForm />
    </div>
  );
};
