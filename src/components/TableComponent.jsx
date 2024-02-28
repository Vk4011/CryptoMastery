import React from 'react'

const TableComponent = ()=>{
    return (
        <>
        <div className="flex flex-col mt-9 border border-cyan-400 rounded">
            <table>
                <thead>
                    <tr>
                        <td>asset</td>
                        <td>name</td>
                        <td>price</td>
                        <td>total volume</td>
                        <td>market cap change</td>
                        <td>1H</td>
                        <td>24H</td>
                        <td>7D</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>asset</td>
                        <td>name</td>
                        <td>price</td>
                        <td>total volume</td>
                        <td>market cap change</td>
                        <td>1H</td>
                        <td>24H</td>
                        <td>7D</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default TableComponent