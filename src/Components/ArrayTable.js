
let Student = [
    {
        name: 'abc',
        roll: '1',
        sem: '3',
        spi: '7.0',
        cgpa: '8.2',
    },
    {
        name: 'def',
        roll: '2',
        sem: '3',
        spi: '8.0',
        cgpa: '8.3',
    },
    {
        name: 'ghi',
        roll: '3',
        sem: '3',
        spi: '7.5',
        cgpa: '8.1',
    },
    {
        name: 'jkl',
        roll: '4',
        sem: '3',
        spi: '7.0',
        cgpa: '8.0',
    },
    {
        name: 'mno',
        roll: '5',
        sem: '3',
        spi: '6.8',
        cgpa: '7.5',
    }
]
const nameList = Student.map((name) => {
    return (
        <>

            <table className="col-2 table table-bordered">
                <tr>
                    <td>{name.name}</td>
                    <td>{name.roll}</td>
                    <td>{name.sem}</td>
                    <td>{name.spi}</td>
                    <td>{name.cgpa}</td>
                </tr>
            </table>
        </>
    )
})

const ArrayTable = () => {

    return (
        <table className="col-2">
            {nameList}
        </table>
    )
}

export default ArrayTable;
