import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  MessageSquare, 
  Phone, 
  QrCode, 
  Settings, 
  BarChart3,
  Users,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  AlertTriangle,
  Info,
  Link
} from 'lucide-react';

import WhatsAppMessageParser from '@/components/whatsapp/WhatsAppMessageParser';
import WhatsAppAutoImport from '@/components/whatsapp/WhatsAppAutoImport';

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

  const handleImport = (data: any) => {
    console.log('Importing diver data from WhatsApp:', data);
    // Implementation would integrate with your diver creation system
  };

  return (
    <div className="space-y-6">
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
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
                  <Zap className="h-8 w-8 text-purple-600" />
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
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Monthly Growth</p>
                    <p className="text-2xl font-bold">+{integrationStats.monthlyGrowth}%</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Response Time</p>
                    <p className="text-2xl font-bold">{integrationStats.responseTime}</p>
                  </div>
                  <Zap className="h-8 w-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Chat Links Clicks</p>
                    <p className="text-2xl font-bold">{integrationStats.clickToChatClicks}</p>
                  </div>
                  <Link className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Business Hours Control</h4>
                    <p className="text-sm text-muted-foreground">
                      Process messages only during specified business hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Button className="h-20 flex-col gap-2">
                    <MessageSquare className="h-6 w-6" />
                    <span className="text-sm">Test Parser</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Link className="h-6 w-6" />
                    <span className="text-sm">Chat Links</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Settings className="h-6 w-6" />
                    <span className="text-sm">Configure</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <BarChart3 className="h-6 w-6" />
                    <span className="text-sm">View Stats</span>
                  </Button>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-medium">Recent WhatsApp Activity</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Maria Silva registered via WhatsApp</span>
                      <Badge variant="outline">3 min ago</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>James Wilson imported</span>
                      <Badge variant="outline">7 min ago</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>李明 sent inquiry</span>
                      <Badge variant="outline">15 min ago</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Setup Instructions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                WhatsApp Setup Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">1. WhatsApp Business Setup</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Register for WhatsApp Business API</li>
                    <li>Configure webhook URL: https://your-domain.com/api/whatsapp/webhook</li>
                    <li>Set up verify token</li>
                    <li>Enable message receiving permissions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">2. Configure Auto-Import</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Set confidence threshold (recommended: 75%)</li>
                    <li>Configure required fields</li>
                    <li>Enable auto-reply messages</li>
                    <li>Set business hours</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">3. Create Chat Links</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Generate click-to-chat links</li>
                    <li>Add to website and marketing materials</li>
                    <li>Track click analytics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">4. Monitor Performance</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Track import success rates</li>
                    <li>Monitor response times</li>
                    <li>Analyze message patterns</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="parser">
          <WhatsAppMessageParser onImport={handleImport} />
        </TabsContent>

        <TabsContent value="autoimport">
          <WhatsAppAutoImport />
        </TabsContent>

        <TabsContent value="chatlinks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link className="h-5 w-5" />
                Click-to-Chat Links Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Generate Chat Link</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full p-2 border rounded-md"
                        placeholder="+1234567890"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Pre-filled Message (Optional)</label>
                      <textarea 
                        className="w-full p-2 border rounded-md resize-none"
                        placeholder="Hi, I'm interested in diving..."
                        rows={3}
                      />
                    </div>
                    <Button className="w-full">
                      <Link className="h-4 w-4 mr-2" />
                      Generate Chat Link
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Generated Link</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <code className="text-sm">https://wa.me/1234567890?text=Hi%2C%20I'm%20interested%20in%20diving...</code>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Copy Link
                      </Button>
                      <Button variant="outline" size="sm">
                        Test Link
                      </Button>
                      <Button variant="outline" size="sm">
                        QR Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="font-medium">Popular Chat Links</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 border rounded">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">General Inquiries</span>
                      <Badge variant="outline">234 clicks</Badge>
                    </div>
                    <code className="text-xs text-muted-foreground">https://wa.me/1234567890</code>
                  </div>
                  <div className="p-3 border rounded">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Trip Booking</span>
                      <Badge variant="outline">189 clicks</Badge>
                    </div>
                    <code className="text-xs text-muted-foreground">https://wa.me/1234567890?text=I%20want%20to%20book%20a%20dive</code>
                  </div>
                  <div className="p-3 border rounded">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Emergency Contact</span>
                      <Badge variant="outline">45 clicks</Badge>
                    </div>
                    <code className="text-xs text-muted-foreground">https://wa.me/1234567890?text=Emergency%20-%20Dive%20Center</code>
                  </div>
                  <div className="p-3 border rounded">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Course Info</span>
                      <Badge variant="outline">156 clicks</Badge>
                    </div>
                    <code className="text-xs text-muted-foreground">https://wa.me/1234567890?text=Tell%20me%20about%20your%20diving%20courses</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>WhatsApp Business Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">WhatsApp Business API Settings</h4>
                <p className="text-sm text-muted-foreground">
                  Configure your WhatsApp Business API credentials
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Phone Number ID</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    placeholder="1234567890"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">WhatsApp Business ID</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    placeholder="your-business@whatsapp"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">API Token</label>
                  <input 
                    type="password" 
                    className="w-full p-2 border rounded-md"
                    placeholder="your_whatsapp_api_token"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Webhook URL</label>
                  <input 
                    type="url" 
                    className="w-full p-2 border rounded-md"
                    value="https://your-domain.com/api/whatsapp/webhook"
                    readOnly
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-medium">Message Templates</h4>
                <p className="text-sm text-muted-foreground">
                  Pre-approved templates for common responses
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3 border rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Welcome Message</span>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Hello! 👋 Thank you for contacting our dive center. How can we help you today?"
                  </p>
                </div>
                <div className="p-3 border rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Booking Confirmation</span>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Great! 🎉 Your dive trip has been confirmed. We'll send you details shortly."
                  </p>
                </div>
              </div>

              <Button className="w-full">
                Save WhatsApp Configuration
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
