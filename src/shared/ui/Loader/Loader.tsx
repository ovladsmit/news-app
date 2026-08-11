import './Loader.scss'

interface LoaderProps {
  /*Доп классы*/
  className?: string;
  
}

export const Loader = (props: LoaderProps) => {
  return (
    <span className={"loader"} >
      
    </span>
  );
};