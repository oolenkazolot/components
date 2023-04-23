import { PageTitle } from '../../components/PageTitle/PageTitle';
const mainClass = 'main';
export const AboutPage: () => JSX.Element = () => {
  return (
    <>
      <main className={mainClass}>
        <PageTitle title="About us" />
      </main>
    </>
  );
};
