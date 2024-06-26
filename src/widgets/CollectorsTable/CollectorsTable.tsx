"use client";

import { useDataCollectorStore } from "@/entities/dataCollector/store";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/uikit/table";

export const CollectorsTable = () => {
  const { bears, addABear } = useDataCollectorStore();
  console.log({ bears });

  return (
    <Table onClick={addABear}>
      <TableCaption>A list of your data collectors.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Active</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Progress</TableHead>
          <TableHead>Jobs done</TableHead>
          <TableHead>Server</TableHead>
          <TableHead className="text-right">Last activity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                </TableRow>
            ))} */}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell colSpan={5} className="text-right"></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
