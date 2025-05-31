import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import { Dashboard } from './pages/dashboard'
import { Campaigns } from './pages/campaigns'
import { CreatorDiscovery } from './pages/creator-discovery'
import { Outreach } from './pages/outreach'
import { Contracts } from './pages/contracts'
import { Analytics } from './pages/analytics'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="campaigns/*" element={<Campaigns />} />
        <Route path="discover" element={<CreatorDiscovery />} />
        <Route path="outreach" element={<Outreach />} />
        <Route path="contracts" element={<Contracts />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
    </Routes>
  )
}