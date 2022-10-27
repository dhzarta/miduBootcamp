export const Note = ({content, date,important}) => {
    return (
        <li>       
          <p>{content}</p>
          <small>{date}</small>  
          <small>{important}</small>  
        </li>)}