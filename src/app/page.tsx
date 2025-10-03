"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  MessageCircle,
  Zap,
  Settings,
  Play,
  Users,
  BarChart3,
  Code,
  Sparkles,
  Hexagon,
  Terminal,
  Cpu,
  Send
} from "lucide-react"

export const dynamic = 'force-dynamic'

export default function Arch1techDashboard() {
  const [activeTab, setActiveTab] = useState("builder")
  const [message, setMessage] = useState("")
  const [agentProgress, setAgentProgress] = useState(65)

  const navigation = [
    { id: "builder", label: "Builder", icon: MessageCircle },
    { id: "testing", label: "Testing Lab", icon: Play },
    { id: "deploy", label: "Deployment", icon: Settings }
  ]

  const mockMessages = [
    { role: "user", content: "Create an AI agent that helps with customer support" },
    { role: "astrid", content: "I'll help you build a customer support agent! Let me start by understanding your specific needs. What type of customer inquiries do you want this agent to handle?" },
    { role: "user", content: "Product questions, order status, and basic troubleshooting" },
    { role: "astrid", content: "Perfect! I'm creating a multi-skilled support agent with:\n\n• Product knowledge base integration\n• Order tracking capabilities\n• Troubleshooting decision trees\n\nI'll configure natural language understanding for these domains." }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border backdrop-blur-sm bg-background/95 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Hexagon className="h-8 w-8 text-primary" />
                <div className="absolute inset-0 animate-pulse">
                  <Hexagon className="h-8 w-8 text-primary/30" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Arch1tech AI</h1>
                <p className="text-xs text-muted-foreground">Engineer Tomorrow</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="neon-border">
                <Sparkles className="h-3 w-3 mr-1" />
                Beta Preview
              </Badge>
              <Avatar className="h-8 w-8 ring-2 ring-primary/20">
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback className="bg-primary/10 text-primary">U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6">
          <nav className="flex space-x-8">
            {navigation.map((nav) => (
              <button
                key={nav.id}
                onClick={() => setActiveTab(nav.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === nav.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <nav.icon className="h-4 w-4" />
                <span className="font-medium">{nav.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} className="w-full">
          {/* Page 1: Conversational Builder Dashboard */}
          <TabsContent value="builder" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Panel - Chat Interface with Astrid */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="neon-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-2">
                          <MessageCircle className="h-5 w-5 text-primary" />
                          <span>Conversational Agent Builder</span>
                        </CardTitle>
                        <CardDescription>
                          Chat with Astrid to build your AI agent using natural language
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          <span className="text-xs text-muted-foreground">Astrid Online</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Chat Messages */}
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {mockMessages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                          <div className={`flex items-start space-x-2 max-w-[80%] ${msg.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                            <Avatar className="h-6 w-6">
                              <AvatarFallback className={msg.role === "user" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"}>
                                {msg.role === "user" ? "U" : "A"}
                              </AvatarFallback>
                            </Avatar>
                            <div className={`rounded-lg px-3 py-2 ${
                              msg.role === "user"
                                ? "bg-primary text-primary-foreground ml-2"
                                : "bg-muted text-foreground mr-2"
                            }`}>
                              <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Message Input */}
                    <div className="flex space-x-2 pt-4 border-t border-border">
                      <Textarea
                        placeholder="Describe what you want your AI agent to do..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1"
                        rows={2}
                      />
                      <Button size="sm" className="self-end neon-glow">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Real-time Agent Construction */}
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Code className="h-5 w-5 text-accent" />
                      <span>Real-time Agent Visualization</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Agent Construction Progress</span>
                        <span className="text-sm text-muted-foreground">{agentProgress}%</span>
                      </div>
                      <Progress value={agentProgress} className="h-2" />

                      <div className="grid grid-cols-3 gap-4 pt-4">
                        {[
                          { label: "Knowledge Base", status: "completed", icon: "🧠" },
                          { label: "Conversation Flow", status: "in-progress", icon: "💬" },
                          { label: "Integration Layer", status: "pending", icon: "🔗" }
                        ].map((item, idx) => (
                          <div key={idx} className="text-center p-3 rounded-lg border border-border">
                            <div className="text-2xl mb-2">{item.icon}</div>
                            <div className="text-xs font-medium">{item.label}</div>
                            <Badge variant={item.status === "completed" ? "default" : item.status === "in-progress" ? "secondary" : "outline"} className="text-xs mt-1">
                              {item.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Panel - Agent Preview */}
              <div className="space-y-6">
                <Card className="neon-border">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Cpu className="h-5 w-5 text-primary" />
                      <span>Agent Preview</span>
                    </CardTitle>
                    <CardDescription>Preview your AI agent as it's built</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center py-8">
                      <div className="relative mx-auto w-24 h-24 mb-4">
                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
                        <div className="absolute inset-2 rounded-full bg-primary/40 animate-ping" />
                        <div className="absolute inset-4 rounded-full bg-primary flex items-center justify-center">
                          <Zap className="h-8 w-8 text-primary-foreground" />
                        </div>
                      </div>
                      <h3 className="font-semibold">Customer Support Agent</h3>
                      <p className="text-sm text-muted-foreground mt-1">Multi-domain support specialist</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Capabilities:</span>
                        <span className="text-muted-foreground">3 of 5</span>
                      </div>
                      {[
                        { name: "Product Knowledge", enabled: true },
                        { name: "Order Tracking", enabled: true },
                        { name: "Troubleshooting", enabled: true },
                        { name: "Escalation Handling", enabled: false },
                        { name: "Multi-language", enabled: false }
                      ].map((capability, idx) => (
                        <div key={idx} className={`flex items-center space-x-2 p-2 rounded border ${
                          capability.enabled ? "border-primary/50 bg-primary/5" : "border-border bg-muted/50"
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${capability.enabled ? "bg-primary" : "bg-muted-foreground"}`} />
                          <span className="text-xs">{capability.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5 text-accent" />
                      <span>Quick Stats</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { label: "Response Time", value: "< 2s", color: "text-green-500" },
                      { label: "Accuracy", value: "94%", color: "text-primary" },
                      { label: "Training Data", value: "2.4k docs", color: "text-accent" },
                      { label: "Languages", value: "1 (EN)", color: "text-muted-foreground" }
                    ].map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                        <span className={`text-sm font-medium ${stat.color}`}>{stat.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Page 2: Agent Testing Laboratory */}
          <TabsContent value="testing" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left Panel - Simulation Environment */}
              <div className="space-y-6">
                <Card className="neon-border">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Terminal className="h-5 w-5 text-primary" />
                      <span>Simulation Environment</span>
                    </CardTitle>
                    <CardDescription>Test your agent in realistic scenarios</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Test Scenarios */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Active Scenarios</span>
                        <Badge variant="secondary">3 Running</Badge>
                      </div>

                      {[
                        {
                          name: "Customer Inquiry - Product Issue",
                          status: "running",
                          progress: 67,
                          messages: 8,
                          accuracy: "92%"
                        },
                        {
                          name: "Order Status Request",
                          status: "completed",
                          progress: 100,
                          messages: 5,
                          accuracy: "98%"
                        },
                        {
                          name: "Technical Troubleshooting",
                          status: "running",
                          progress: 34,
                          messages: 12,
                          accuracy: "89%"
                        }
                      ].map((scenario, idx) => (
                        <div key={idx} className="p-4 rounded-lg border border-border bg-card">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full ${
                                scenario.status === "running" ? "bg-primary animate-pulse" : "bg-green-500"
                              }`} />
                              <span className="text-sm font-medium">{scenario.name}</span>
                            </div>
                            <Badge variant={scenario.status === "running" ? "default" : "secondary"}>
                              {scenario.status}
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            <Progress value={scenario.progress} className="h-1" />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>{scenario.messages} messages</span>
                              <span>Accuracy: {scenario.accuracy}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Test Controls */}
                    <div className="pt-4 border-t border-border space-y-3">
                      <Button className="w-full neon-glow">
                        <Play className="h-4 w-4 mr-2" />
                        Start New Test Simulation
                      </Button>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm">
                          <Users className="h-4 w-4 mr-1" />
                          Load Test
                        </Button>
                        <Button variant="outline" size="sm">
                          <BarChart3 className="h-4 w-4 mr-1" />
                          Stress Test
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Real-time Testing Interface */}
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5 text-accent" />
                      <span>Live Testing Interface</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Mock conversation */}
                    <div className="terminal max-h-64 overflow-y-auto space-y-2">
                      <div className="terminal-line">
                        <span className="terminal-prompt">USER:</span>
                        <span className="text-foreground">Hi, I'm having trouble with my recent order #12345</span>
                      </div>
                      <div className="terminal-line">
                        <span className="terminal-prompt text-accent">AGENT:</span>
                        <span className="text-foreground">I'd be happy to help you with order #12345. Let me check the status...</span>
                      </div>
                      <div className="terminal-line">
                        <span className="terminal-prompt text-accent">AGENT:</span>
                        <span className="text-foreground">I can see your order was shipped yesterday and is currently in transit. Expected delivery is tomorrow by 5 PM.</span>
                      </div>
                      <div className="terminal-line">
                        <span className="terminal-prompt">USER:</span>
                        <span className="text-foreground">Great! What if I'm not home?</span>
                      </div>
                      <div className="terminal-line">
                        <span className="terminal-prompt text-accent">AGENT:</span>
                        <span className="text-foreground">The package will be left in a safe location or with a neighbor. You'll receive...</span>
                        <span className="terminal-cursor" />
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Input placeholder="Test a user message..." className="flex-1" />
                      <Button size="sm">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Panel - Testing Analytics & Feedback */}
              <div className="space-y-6">
                <Card className="neon-border">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <span>Performance Analytics</span>
                    </CardTitle>
                    <CardDescription>Real-time testing metrics and insights</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Success Rate", value: "94.2%", change: "+2.1%", color: "text-green-500" },
                        { label: "Avg Response Time", value: "1.8s", change: "-0.3s", color: "text-primary" },
                        { label: "User Satisfaction", value: "4.7/5", change: "+0.2", color: "text-accent" },
                        { label: "Escalation Rate", value: "3.1%", change: "-1.2%", color: "text-green-500" }
                      ].map((metric, idx) => (
                        <div key={idx} className="p-3 rounded-lg border border-border bg-card">
                          <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                          <div className="text-lg font-bold">{metric.value}</div>
                          <div className={`text-xs ${metric.color}`}>{metric.change}</div>
                        </div>
                      ))}
                    </div>

                    {/* Issue Categories */}
                    <div className="space-y-3">
                      <div className="text-sm font-medium">Common Issues Detected</div>
                      {[
                        { issue: "Context switching", count: 12, severity: "medium" },
                        { issue: "Ambiguous responses", count: 8, severity: "high" },
                        { issue: "Knowledge gaps", count: 5, severity: "low" },
                        { issue: "Response latency", count: 3, severity: "medium" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 rounded border border-border">
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${
                              item.severity === "high" ? "bg-red-500" :
                              item.severity === "medium" ? "bg-yellow-500" : "bg-green-500"
                            }`} />
                            <span className="text-sm">{item.issue}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">{item.count}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Collaborative Feedback */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-accent" />
                      <span>Team Feedback</span>
                    </CardTitle>
                    <CardDescription>Collaborative testing and feedback tools</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Recent Feedback */}
                    <div className="space-y-3">
                      {[
                        {
                          user: "Sarah K.",
                          avatar: "SK",
                          comment: "Agent handles product questions well, but struggles with complex technical issues.",
                          time: "2 min ago",
                          type: "improvement"
                        },
                        {
                          user: "Mike R.",
                          avatar: "MR",
                          comment: "Great response time! The order tracking feature works perfectly.",
                          time: "15 min ago",
                          type: "positive"
                        },
                        {
                          user: "Lisa C.",
                          avatar: "LC",
                          comment: "Consider adding more empathy in responses for frustrated customers.",
                          time: "1 hour ago",
                          type: "improvement"
                        }
                      ].map((feedback, idx) => (
                        <div key={idx} className="flex space-x-3 p-3 rounded-lg bg-muted/50">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="text-xs bg-primary/10">{feedback.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{feedback.user}</span>
                              <span className="text-xs text-muted-foreground">{feedback.time}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{feedback.comment}</p>
                          </div>
                          <Badge variant={feedback.type === "positive" ? "default" : "secondary"} className="text-xs">
                            {feedback.type}
                          </Badge>
                        </div>
                      ))}
                    </div>

                    {/* Add Feedback */}
                    <div className="pt-3 border-t border-border space-y-2">
                      <Textarea placeholder="Add your testing feedback..." rows={2} />
                      <Button size="sm" className="w-full">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Submit Feedback
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Page 3: Deployment Control Center */}
          <TabsContent value="deploy" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Panel - Deployment Status */}
              <div className="space-y-6">
                <Card className="neon-border">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <span>Deployment Status</span>
                    </CardTitle>
                    <CardDescription>Monitor your deployed agents</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Active Deployments */}
                    <div className="space-y-3">
                      {[
                        {
                          name: "Customer Support Agent",
                          environment: "Production",
                          status: "healthy",
                          uptime: "99.8%",
                          requests: "2.4k",
                          version: "v1.2.3"
                        },
                        {
                          name: "Sales Assistant",
                          environment: "Staging",
                          status: "deploying",
                          uptime: "---",
                          requests: "0",
                          version: "v1.0.1"
                        },
                        {
                          name: "Technical Support Bot",
                          environment: "Development",
                          status: "healthy",
                          uptime: "96.2%",
                          requests: "156",
                          version: "v2.0.0-beta"
                        }
                      ].map((deployment, idx) => (
                        <div key={idx} className="p-4 rounded-lg border border-border bg-card">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <div className={`w-3 h-3 rounded-full ${
                                deployment.status === "healthy" ? "bg-green-500" :
                                deployment.status === "deploying" ? "bg-yellow-500 animate-pulse" : "bg-red-500"
                              }`} />
                              <span className="font-medium text-sm">{deployment.name}</span>
                            </div>
                            <Badge variant={deployment.environment === "Production" ? "default" : "secondary"}>
                              {deployment.environment}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                            <div>
                              <div>Uptime</div>
                              <div className="font-medium text-foreground">{deployment.uptime}</div>
                            </div>
                            <div>
                              <div>Requests</div>
                              <div className="font-medium text-foreground">{deployment.requests}</div>
                            </div>
                            <div>
                              <div>Version</div>
                              <div className="font-medium text-foreground">{deployment.version}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Deploy Actions */}
                    <div className="pt-4 border-t border-border space-y-2">
                      <Button className="w-full neon-glow">
                        <Zap className="h-4 w-4 mr-2" />
                        Deploy New Agent
                      </Button>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4 mr-1" />
                          Configure
                        </Button>
                        <Button variant="outline" size="sm">
                          <Terminal className="h-4 w-4 mr-1" />
                          Logs
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">System Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { label: "Total Agents", value: "8", icon: "🤖" },
                      { label: "Active Users", value: "142", icon: "👥" },
                      { label: "API Calls Today", value: "24.7k", icon: "📊" },
                      { label: "Success Rate", value: "99.2%", icon: "✅" }
                    ].map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{stat.icon}</span>
                          <span className="text-sm text-muted-foreground">{stat.label}</span>
                        </div>
                        <span className="font-semibold">{stat.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Center Panel - Monitoring Dashboard */}
              <div className="space-y-6">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5 text-accent" />
                      <span>Performance Monitoring</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Response Time Chart */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Response Time (24h)</span>
                        <span className="text-xs text-muted-foreground">Avg: 1.8s</span>
                      </div>
                      <div className="h-24 bg-muted/50 rounded-lg flex items-end justify-between px-2 py-2">
                        {[20, 35, 45, 38, 50, 42, 48, 52, 44, 40, 38, 42].map((height, idx) => (
                          <div
                            key={idx}
                            className="bg-primary rounded-sm opacity-70 hover:opacity-100 transition-opacity"
                            style={{ height: `${height}%`, width: '6%' }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Request Volume */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Request Volume</span>
                        <span className="text-xs text-muted-foreground">Peak: 3.2k/hour</span>
                      </div>
                      <div className="h-16 bg-muted/50 rounded-lg flex items-end justify-between px-2 py-2">
                        {[60, 45, 70, 55, 80, 65, 75, 85, 72, 68, 62, 70].map((height, idx) => (
                          <div
                            key={idx}
                            className="bg-accent rounded-sm opacity-70 hover:opacity-100 transition-opacity"
                            style={{ height: `${height}%`, width: '6%' }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Error Rate */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Error Rate</span>
                        <span className="text-xs text-green-500">0.8% (Target: &lt;2%)</span>
                      </div>
                      <Progress value={0.8} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Terminal className="h-5 w-5 text-primary" />
                      <span>Activity Log</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {[
                        { time: "14:32", event: "Agent v1.2.3 deployed to production", type: "deploy" },
                        { time: "14:28", event: "Performance alert resolved", type: "alert" },
                        { time: "14:15", event: "New user onboarded: jane@company.com", type: "user" },
                        { time: "13:45", event: "Scaling event: +2 instances", type: "scale" },
                        { time: "13:30", event: "Weekly backup completed", type: "backup" },
                        { time: "13:12", event: "Agent training data updated", type: "update" }
                      ].map((activity, idx) => (
                        <div key={idx} className="flex items-start space-x-3 text-sm">
                          <span className="text-xs text-muted-foreground font-mono w-12">{activity.time}</span>
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            activity.type === "deploy" ? "bg-primary" :
                            activity.type === "alert" ? "bg-red-500" :
                            activity.type === "user" ? "bg-green-500" :
                            activity.type === "scale" ? "bg-accent" :
                            activity.type === "backup" ? "bg-blue-500" : "bg-yellow-500"
                          }`} />
                          <span className="text-muted-foreground leading-tight">{activity.event}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Panel - Configuration & Control */}
              <div className="space-y-6">
                <Card className="neon-border">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Settings className="h-5 w-5 text-primary" />
                      <span>Deployment Control</span>
                    </CardTitle>
                    <CardDescription>Manage and configure your agents</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Environment Selector */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Environment</label>
                      <div className="grid grid-cols-3 gap-1">
                        <Button variant="outline" size="sm" className="text-xs">Dev</Button>
                        <Button variant="outline" size="sm" className="text-xs">Stage</Button>
                        <Button variant="default" size="sm" className="text-xs">Prod</Button>
                      </div>
                    </div>

                    {/* Resource Allocation */}
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Resource Allocation</label>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>CPU Usage</span>
                          <span>34%</span>
                        </div>
                        <Progress value={34} className="h-2" />
                        <div className="flex justify-between text-xs">
                          <span>Memory</span>
                          <span>2.1GB / 8GB</span>
                        </div>
                        <Progress value={26} className="h-2" />
                      </div>
                    </div>

                    {/* Auto-scaling */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Auto-scaling</label>
                        <Badge variant="default" className="text-xs">Enabled</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Min: 2 instances | Max: 10 instances
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-border space-y-2">
                      <Button variant="outline" size="sm" className="w-full">
                        <Code className="h-4 w-4 mr-2" />
                        View Configuration
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Analytics Dashboard
                      </Button>
                      <Button variant="outline" size="sm" className="w-full text-red-500 hover:text-red-400">
                        <Settings className="h-4 w-4 mr-2" />
                        Emergency Stop
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Alerts & Notifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="h-5 w-5 text-accent" />
                        <span>Alerts</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">2 Active</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      {
                        type: "warning",
                        message: "Response time increased by 15% in last hour",
                        time: "5 min ago"
                      },
                      {
                        type: "info",
                        message: "Scheduled maintenance in 2 hours",
                        time: "1 hour ago"
                      },
                      {
                        type: "success",
                        message: "All systems operating normally",
                        time: "2 hours ago"
                      }
                    ].map((alert, idx) => (
                      <div key={idx} className={`p-3 rounded-lg border ${
                        alert.type === "warning" ? "border-yellow-500/50 bg-yellow-500/10" :
                        alert.type === "info" ? "border-blue-500/50 bg-blue-500/10" :
                        "border-green-500/50 bg-green-500/10"
                      }`}>
                        <div className="flex items-center space-x-2 mb-1">
                          <div className={`w-2 h-2 rounded-full ${
                            alert.type === "warning" ? "bg-yellow-500" :
                            alert.type === "info" ? "bg-blue-500" : "bg-green-500"
                          }`} />
                          <span className="text-xs text-muted-foreground">{alert.time}</span>
                        </div>
                        <p className="text-xs">{alert.message}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}