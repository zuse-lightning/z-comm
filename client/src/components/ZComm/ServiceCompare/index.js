import React from "react";
import { Table } from "semantic-ui-react";
import { zcommServiceTable } from "../../../assets/generalAssets";

import "./style.css";

const ServiceCompare = () => {
    return (
        <>
            <Table basic="very" celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Service</Table.HeaderCell>
                        <Table.HeaderCell>Web Development</Table.HeaderCell>
                        <Table.HeaderCell>Product Fulfillment</Table.HeaderCell>
                        <Table.HeaderCell>Both</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {zcommServiceTable.map((row, rowIndex) => (
                        <Table.Row key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <Table.Cell key={cellIndex}>{cell}</Table.Cell>
                            ))}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </>
    );
};

export default ServiceCompare;