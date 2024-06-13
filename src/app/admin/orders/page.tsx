import ComplexTable from 'components/admin/data-tables/ComplexTable';

import tableDataComplex from 'variables/data-tables/tableDataComplex';
const page = () => {
    return (
        <div>
                <ComplexTable tableData={tableDataComplex} />
        </div>
    );
};

export default page;