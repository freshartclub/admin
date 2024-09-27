
import { Card, Table, TableBody } from "@mui/material";
import { useState, useEffect } from "react";
import { Scrollbar } from "src/components/scrollbar";
import { getToken } from "src/utils/tokenHelper";
import {
    useTable,
    emptyRows,
    TableNoData,
    TableEmptyRows,
    TableHeadCustom,
} from 'src/components/table';
import { ThemeTableRow } from "./Theme-table-row";

const TABLE_HEAD = [
    { _id: 'styleName', label: 'Style Name', width: 220 },
    { _id: 'createdAt', label: 'Created At', width: 200 },
    { _id: 'categoryName', label: 'Category Name', },
    { _id: '', width: 88 },
];

export function ThemeListCategory() {
    const token = getToken();
    const [styles, setStyles] = useState([]);
    const table = useTable();
    const [notFound, setNotFound] = useState(false);
     

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/list-artwork-style/theme", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            setStyles(data.data);
            setNotFound(data.data.length === 0);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const dataFiltered = styles; 
   
    return (
        <div>
           <Card>
            <Scrollbar>
                <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
                    <TableHeadCustom
                        order={table.order}
                        orderBy={table.orderBy}
                        headLabel={TABLE_HEAD}
                        rowCount={dataFiltered.length}
                        numSelected={table.selected.length}
                        onSort={table.onSort}
                        onSelectAllRows={(checked) =>
                            table.onSelectAllRows(checked, dataFiltered.map((row) => row._id))
                            
                        }
                    />
                    <TableBody>
                        {dataFiltered
                            // .slice(
                            //     table.page * table.rowsPerPage,
                            //     table.page * table.rowsPerPage + table.rowsPerPage
                            // )
                            .map((row) => (
                                <ThemeTableRow 
                                    key={row._id}
                                    row={row}
                                    selected={table.selected.includes(row._id)}
                                    onSelectRow={() => table.onSelectRow(row._id)}
                                    onDeleteRow={() => handleDeleteRow(row._id)} 
                                    onEditRow={() => handleEditRow(row._id)} 
                                />
                            ))}
                        <TableEmptyRows
                            height={table.dense ? 56 : 76}
                            emptyRows={emptyRows(table.page, table.rowsPerPage, dataFiltered.length)}
                        />
                        <TableNoData notFound={notFound} />
                    </TableBody>
                </Table>
            </Scrollbar>
            </Card>
        </div>
    );
}



