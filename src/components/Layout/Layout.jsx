import style from './Layout.module.css';
console.log('style: ', style);

export const Layout = ({children}) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}