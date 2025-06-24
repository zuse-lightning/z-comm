import React from "react";
import { Table } from "semantic-ui-react";

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
                    <Table.Row>
                        <Table.Cell>Custom Design</Table.Cell>
                        <Table.Cell>✅</Table.Cell>
                        <Table.Cell>❌</Table.Cell>
                        <Table.Cell>✅</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Responsive Layout</Table.Cell>
                        <Table.Cell>✅</Table.Cell>
                        <Table.Cell>❌</Table.Cell>
                        <Table.Cell>✅</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>E-Commerce Integration</Table.Cell>
                        <Table.Cell>✅</Table.Cell>
                        <Table.Cell>✅</Table.Cell>
                        <Table.Cell>✅</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Inventory Management</Table.Cell>
                        <Table.Cell>❌</Table.Cell>
                        <Table.Cell>✅</Table.Cell>
                        <Table.Cell>✅</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Order Processing</Table.Cell>
                        <Table.Cell>❌</Table.Cell>
                        <Table.Cell>✅</Table.Cell>
                        <Table.Cell>✅</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </>
    );
};

export default ServiceCompare;