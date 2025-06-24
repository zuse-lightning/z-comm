import React from "react";
import { Header, Table } from "semantic-ui-react";
import { zcommServiceTable } from "../../../assets/generalAssets";

import "./style.css";

const ServiceCompare = () => {
    return (
        <>
            <Header as="h1" id="zcomm-service-compare-header">Service Comparison</Header>
            <Header as="h4" id="zcomm-service-compare-subheader">
                At Z-Comm, we offer a range of services tailored to meet the diverse needs of our clients. Below is a comparison of our web development, product fulfillment, and combined services.
            </Header>
            <Table id="zcomm-service-table" basic="very" celled collapsing>
                <Table.Header id="zcomm-service-table-header">
                    <Table.Row className="zcomm-service-table-row">
                        <Table.HeaderCell className="zcomm-service-table-header-cell">Service</Table.HeaderCell>
                        <Table.HeaderCell className="zcomm-service-table-header-cell">Web Development</Table.HeaderCell>
                        <Table.HeaderCell className="zcomm-service-table-header-cell">Product Fulfillment</Table.HeaderCell>
                        <Table.HeaderCell className="zcomm-service-table-header-cell">Both</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body id="zcomm-service-table-body">
                    {zcommServiceTable.map((row, rowIndex) => (
                        <Table.Row className="zcomm-service-table-row" key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <Table.Cell className="zcomm-service-table-cell" key={cellIndex}>{cell}</Table.Cell>
                            ))}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </>
    );
};

export default ServiceCompare;