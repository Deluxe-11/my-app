import styles from './style.module.scss';

interface Prop {
  children?: JSX.Element | JSX.Element[];
}

function Layout({ children }: Prop) {
  return (
    <div>
      <div className="min-h-screen bg-red-500 h-full w-screen flex ">
        <div className="0 w-20 min-h-screen h-full">
          <ul>
            <li>Home</li>
          </ul>
        </div>

        <div className={'w-full bg-white'}> {children}</div>
      </div>
    </div>
  );
}

export default Layout;
