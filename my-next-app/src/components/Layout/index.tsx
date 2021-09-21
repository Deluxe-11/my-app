interface Prop {
  children?: JSX.Element
}

function Layout({ children }: Prop) {
  return (
    <div>
      <div className="h-screen w-screen flex bg-gray-200">
        <div className={'w-full bg-white'}> {children}</div>
      </div>
    </div>
  );
}

export default Layout;
