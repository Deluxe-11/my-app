import styles from './style.module.scss';

interface Prop {
  children?: JSX.Element;
}

function Layout({ children }: Prop) {
  return (
    <div>
      <div className="h-screen w-screen flex bg-gray-200">
        <div className="bg-red-500 w-20 h-screen">
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
