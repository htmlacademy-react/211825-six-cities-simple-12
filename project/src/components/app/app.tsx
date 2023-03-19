import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  foundPlacesCounter: number;
}

function App({foundPlacesCounter}: AppProps): JSX.Element {
  return (
    <MainPage foundPlacesCounter={foundPlacesCounter} />
  );
}

export default App;
