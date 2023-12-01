import { Link } from 'react-router-dom';
import LeftContainerIconTitle from '../icons/LeftContainerIconTitle';

const LeftContainer = () => {
  


  return (
    <Link to={'/select'} className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <LeftContainerIconTitle />
          </div>
          <h2 className="text-gray-900 text-lg title-font font-medium">Neptune</h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">
            Click here to choose streaming service you want to import playlist
            from
          </p>
        </div>
      </div>
    </Link>
  );
}

export default LeftContainer