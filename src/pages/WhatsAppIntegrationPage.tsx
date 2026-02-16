import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Phone, 
  Settings, 
  Users,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

export default function WhatsAppIntegrationPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const integrationStats = {
    totalDivers: 1247,
    whatsappDivers: 234,
    autoImportRate: 82,
    avgConfidence: 88,
    monthlyGrowth: 31,
    responseTime: '1.8 min',
    clickToChatClicks: 1456,
    messageTemplates: 12,
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">WhatsApp Integration</h1>
          <p className="text-muted-foreground">
            Manage WhatsApp-based diver registration and automated communication
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Phone className="h-3 w-3" />
            Business API
          </Badge>
          <Badge variant="default" className="flex items-center gap-1">
            <MessageSquare className="h-3 w-3" />
            Auto-Import Active
          </Badge>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="parser">Message Parser</TabsTrigger>
          <TabsTrigger value="autoimport">Auto-Import</TabsTrigger>
          <TabsTrigger value="chatlinks">Chat Links</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Divers</p>
                    <p className="text-2xl font-bold">{integrationStats.totalDivers}</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp Divers</p>
                    <p className="text-2xl font-bold">{integrationStats.whatsappDivers}</p>
                  </div>
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Auto-Import Rate</p>
                    <p className="text-2xl font-bold">{integrationStats.autoImportRate}%</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Confidence</p>
                    <p className="text-2xl font-bold">{integrationStats.avgConfidence}%</p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                WhatsApp Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Enhanced Message Parsing</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced parsing for WhatsApp's conversational format and international phone numbers
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Auto-Reply System</h4>
                  <p className="text-sm text-muted-foreground">
                    Intelligent responses based on message content and confidence scores
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Click-to-Chat Links</h4>
                  <p className="text-sm text-muted-foreground">
                    Generate direct chat links for website and marketing materials
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="parser" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Message Parser</CardTitle>
            </CardHeader>
            <CardContent>
              <p>WhatsApp Message Parser - Extract diver information from WhatsApp messages automatically.</p>
              <div className="mt-4">
                <Button>Test Parser</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="autoimport" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Auto-Import Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Configure automatic import of WhatsApp messages into diver profiles.</p>
              <div className="mt-4">
                <Button>Configure Auto-Import</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chatlinks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Click-to-Chat Links</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Generate WhatsApp links that allow customers to start conversations with a single click.</p>
              <div className="mt-4">
                <Button>Generate Chat Links</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>WhatsApp Business Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Configure your WhatsApp Business API credentials and settings.</p>
              <div className="mt-4">
                <Button>Save Configuration</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
