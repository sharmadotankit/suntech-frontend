import suntechEngineeringConsultantLogo from '../../assets/images/suntech-engineering-consultants.png';
import suntechConstructionEngineeringConsultantLogo from '../../assets/images/suntech-construction-engineering-consultants.png';
import { Link } from 'react-router-dom';


const SelectCompanyComponent = () => {
  return (
    <div className='text-center h-screen bg-gray-200'>
      
      <div className="flex justify-evenly items-center pt-20 flex-wrap">
        <Link to="/company/dashboard" className="relative block mx-4 mb-4 sm:mb-0 w-full sm:w-auto" style={{ maxWidth: '400px' }}>
          <img
            src={suntechEngineeringConsultantLogo}
            alt="Suntech Engineering Consultant"
            className="w-full h-auto transition-transform transform hover:scale-110 cursor-pointer mt-60 hover:bg-amber-100 p-5 rounded"
          />
        </Link>

        <Link to="/company/dashboard" className="relative block mx-4 w-full sm:w-auto" style={{ maxWidth: '400px' }}>
          <img
            src={suntechConstructionEngineeringConsultantLogo}
            alt="Suntech Construction Engineering Consultant"
            className="w-full h-auto transition-transform transform hover:scale-110 cursor-pointer mt-60 hover:bg-amber-100 p-5 rounded"
          />
        </Link>
      </div>
    </div>
  )
}

export default SelectCompanyComponent
