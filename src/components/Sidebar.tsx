import { Link } from 'react-router-dom';
import suntechEngineeringConsultantLogo from '../assets/images/suntech-engineering-consultants.png';
import suntechConstructionEngineeringConsultantLogo from '../assets/images/suntech-construction-engineering-consultants.png';
import { ReactNode, useEffect } from 'react';

type SidebarProps = {
    children: ReactNode;
};

const SideBar: React.FC<SidebarProps> = ({ children }) => {
    let companyName = "suntech-engineering-consultant";
    const validCompanies = ['suntech-engineering-consultant', 'suntech-construction-engineering-consultant'];
    const isValidCompany = validCompanies.includes(companyName);


    useEffect(() => {
        if (!isValidCompany) {
            window.location.href = '/404';
            return () => { };
        }
    }, [isValidCompany]);

    let dataForLink = [
        {
            title: "Dashboard",
            link: `/company/dashboard`
        },
        {
            title: "Offer Letters",
            link: `/company/offer-letters`
        },
        {
            title: "Projects",
            link: `/company/projects`
        },
        {
            title: "Invoices",
            link: `/company/invoice-register`
        },
        {
            title: "Site Visits",
            link: `/company/site-visits-register`
        },
        {
            title: "Outward Register",
            link: `/company/outward-register`
        },
        {
            title: "Client Register",
            link: `/company/client-register`
        },
        {
            title: "Company Register",
            link: `/company/company-register`
        },
        {
            title: "Associate Register",
            link: `/company/associate-register`
        },
        {
            title: "Expenses",
            link: `/company/expenses`
        },
        {
            title: "Leave Record",
            link: `/company/leave-record`
        },
        {
            title: "Sign Out",
            link: `/`
        },
    ]

    return (
        <div className="flex h-full min-h-screen" >
            <div className="bg-amber-50 text-black w-64 flex flex-col overflow-y-auto" style={{ minWidth:'250px' }}>
                <div className="p-4 text-xl font-bold mb-5">
                    <img
                        src={companyName == "suntech-construction-engineering-consultant" ? suntechConstructionEngineeringConsultantLogo : suntechEngineeringConsultantLogo}
                        alt="suntech-logo"
                    />
                </div>
                <ul className="flex-1">
                    {dataForLink.map(item => {
                        return <>
                            <Link to={item.link} className={`p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block`}>
                                {item.title}
                            </Link>
                        </>
                    })
                    }
                </ul>
            </div>
            <div className="flex-1 p-4">
                {children}
            </div>
        </div>
    )
}

export default SideBar