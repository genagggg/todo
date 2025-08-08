import './Grid.css'

interface GridProps {
  count: number;
}

export const Grid: React.FC<GridProps> = ({count}) => {
 
const gridItems = Array.from({length: count}, (_, index)=>(
  <div key={index} className='item'>
    {index+1}
  </div>
))

  return (
    <div className="grid-container">
     {gridItems}
    </div>
  );
};
