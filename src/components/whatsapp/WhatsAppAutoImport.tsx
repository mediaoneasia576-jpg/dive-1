import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { 
  MessageSquare, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Users, 
  Settings,
  Database,
  Shield,
  Zap,
  Phone,
  Globe
} from 'lucide-react';

interface ImportSettings {
  autoImport: boolean;
  requireEmail: boolean;
  requirePhone: boolean;
  duplicateCheck: boolean;
  confidenceThreshold: number;
  notifyOnImport: boolean;
  businessHoursOnly: boolean;
  autoReply: boolean;
}

interface ImportStats {
  totalProcessed: number;
  successfulImports: number;
  duplicatesSkipped: number;
  lowConfidenceSkipped: number;
  errors: number;
  averageResponseTime: string;
}

export default function WhatsAppAutoImport() {
  const [settings, setSettings] = useState<ImportSettings>({
    autoImport: true,
    requireEmail: true,
    requirePhone: false,
    duplicateCheck: true,
    confidenceThreshold: 75,
    notifyOnImport: true,
    businessHoursOnly: false,
    autoReply: true,
  });

  const [stats, setStats] = useState<ImportStats>({
    totalProcessed: 234,
    successfulImports: 198,
    duplicatesSkipped: 12,
    lowConfidenceSkipped: 8,
    errors: 16,
    averageResponseTime: '1.8 min',
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [recentImports, setRecentImports] = useState([
    { name: 'Maria Silva', time: '3 minutes ago', status: 'success', confidence: 88, source: 'whatsapp' },
    { name: 'James Wilson', time: '7 minutes ago', status: 'success', confidence: 92, source: 'whatsapp' },
    { name: '李明', time: '11 minutes ago', status: 'duplicate', confidence: 81, source: 'whatsapp' },
    { name: 'Ahmed Hassan', time: '15 minutes ago', status: 'success', confidence: 86, source: 'whatsapp' },
    { name: 'Sophie Martin', time: '22 minutes ago', status: 'error', confidence: 45, source: 'whatsapp' },
  ]);

  const handleSettingChange = (key: keyof ImportSettings, value: boolean | number) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const successRate = stats.totalProcessed > 0 
    ? Math.round((stats.successfulImports / stats.totalProcessed) * 100) 
    : 0;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'duplicate':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return 'default';
      case 'duplicate':
        return 'secondary';
      case 'error':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Auto-Import</p>
                <p className="text-2xl font-bold">{settings.autoImport ? 'Active' : 'Inactive'}</p>
              </div>
              <MessageSquare className={`h-8 w-8 ${settings.autoImport ? 'text-green-600' : 'text-gray-400'}`} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
                <p className="text-2xl font-bold">{successRate}%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <Progress value={successRate} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Response</p>
                <p className="text-2xl font-bold">{stats.averageResponseTime}</p>
              </div>
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Confidence</p>
                <p className="text-2xl font-bold">{settings.confidenceThreshold}%</p>
              </div>
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              WhatsApp Auto-Import Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Enable Auto-Import</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically process WhatsApp messages
                </p>
              </div>
              <Switch 
                checked={settings.autoImport}
                onCheckedChange={(checked) => handleSettingChange('autoImport', checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Require Email</Label>
                <p className="text-sm text-muted-foreground">
                  Only import if email is detected
                </p>
              </div>
              <Switch 
                checked={settings.requireEmail}
                onCheckedChange={(checked) => handleSettingChange('requireEmail', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Require Phone</Label>
                <p className="text-sm text-muted-foreground">
                  Only import if phone is detected
                </p>
              </div>
              <Switch 
                checked={settings.requirePhone}
                onCheckedChange={(checked) => handleSettingChange('requirePhone', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Duplicate Check</Label>
                <p className="text-sm text-muted-foreground">
                  Skip existing divers
                </p>
              </div>
              <Switch 
                checked={settings.duplicateCheck}
                onCheckedChange={(checked) => handleSettingChange('duplicateCheck', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-Reply</Label>
                <p className="text-sm text-muted-foreground">
                  Send automatic responses
                </p>
              </div>
              <Switch 
                checked={settings.autoReply}
                onCheckedChange={(checked) => handleSettingChange('autoReply', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Business Hours Only</Label>
                <p className="text-sm text-muted-foreground">
                  Process only during business hours
                </p>
              </div>
              <Switch 
                checked={settings.businessHoursOnly}
                onCheckedChange={(checked) => handleSettingChange('businessHoursOnly', checked)}
              />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Confidence Threshold: {settings.confidenceThreshold}%</Label>
              <p className="text-sm text-muted-foreground">
                Minimum confidence score for auto-import
              </p>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={settings.confidenceThreshold}
                onChange={(e) => handleSettingChange('confidenceThreshold', parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            <Button className="w-full">
              <Zap className="h-4 w-4 mr-2" />
              Test WhatsApp Integration
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent WhatsApp Imports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentImports.map((importItem, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(importItem.status)}
                    <div>
                      <p className="font-medium">{importItem.name}</p>
                      <p className="text-sm text-muted-foreground">{importItem.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {importItem.confidence}% confidence
                    </Badge>
                    <Badge variant={getStatusBadge(importItem.status)}>
                      {importItem.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Phone className="h-3 w-3 mr-1" />
                      {importItem.source}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-2">
              <h4 className="font-medium">WhatsApp Import Statistics</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Successful:</span>
                  <span className="font-medium text-green-600">{stats.successfulImports}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duplicates:</span>
                  <span className="font-medium text-yellow-600">{stats.duplicatesSkipped}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Low Confidence:</span>
                  <span className="font-medium text-orange-600">{stats.lowConfidenceSkipped}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Errors:</span>
                  <span className="font-medium text-red-600">{stats.errors}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* WhatsApp Business Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            WhatsApp Business Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Click-to-Chat
              </h4>
              <p className="text-sm text-muted-foreground">
                Generate WhatsApp links that allow customers to start conversations with a single click
              </p>
              <Button variant="outline" size="sm">
                Generate Chat Links
              </Button>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Message Templates
              </h4>
              <p className="text-sm text-muted-foreground">
                Create pre-approved message templates for common inquiries
              </p>
              <Button variant="outline" size="sm">
                Manage Templates
              </Button>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <Users className="h-4 w-4" />
                Customer Labels
              </h4>
              <p className="text-sm text-muted-foreground">
                Organize customers with custom labels and tags
              </p>
              <Button variant="outline" size="sm">
                Configure Labels
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
