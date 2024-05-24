import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs.jsx";
import { useState } from "react";

function Dashboard() {
  const [inventory, setInventory] = useState(1000);
  const [sold, setSold] = useState(300);
  const [inStock, setInStock] = useState(700);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Inventory Management Dashboard</h1>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Total Inventory</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{inventory}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Items Sold</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{sold}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Items In Stock</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{inStock}</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="details" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Details about the inventory will go here.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sales Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Details about the sales will go here.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Dashboard;
