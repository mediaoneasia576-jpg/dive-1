import React, { useState } from 'react';
import { createMaintenanceTask } from '@/hooks/useMaintenance';
import { updateGearStock } from '@/hooks/useGear';

export default function GearStockItem({ stock }: { stock: any }) {
  const [status, setStatus] = useState<string>(stock.status || 'available');
  const [lastMaintenance, setLastMaintenance] = useState<string | null>(stock.last_maintenance_at ?? null);

  async function scheduleMaintenance() {
    const due = new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString();
    const { data } = await createMaintenanceTask({ gear_stock_id: stock.id, due_at: due, notes: 'Scheduled via UI' });
    alert('Maintenance scheduled');
    if (data?.completed_at) setLastMaintenance(data.completed_at);
  }

  async function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value;
    setStatus(newStatus);
    await updateGearStock(stock.id, { status: newStatus });
  }

  return (
    <div className="p-3 border rounded">
      <div className="flex justify-between items-center">
        <div>
          <div className="font-medium">{stock.serial_number ?? 'Unit'}</div>
          <div className="text-sm text-muted-foreground">Last maintenance: {lastMaintenance ?? '—'}</div>
        </div>
        <div className="flex items-center gap-3">
          <select value={status} onChange={handleStatusChange} className="border rounded px-2 py-1 text-sm">
            <option value="available">Available</option>
            <option value="rented">Rented</option>
            <option value="in_repair">In Repair</option>
            <option value="retired">Retired</option>
          </select>
          <button onClick={scheduleMaintenance} className="btn">Schedule Maintenance</button>
        </div>
      </div>
    </div>
  );
}
