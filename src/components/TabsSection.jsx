import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabsSection = ({ description, floorPlan, mapUrl }) => {
  return (
    <div className="tabs-section card" style={{ padding: '2rem' }}>
      <Tabs>
        <TabList style={{ borderBottom: '1px solid var(--border)', marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
          <Tab>Description</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Map</Tab>
        </TabList>

        <TabPanel>
          <h3 style={{ marginTop: 0 }}>About this property</h3>
          <div style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-main)' }} dangerouslySetInnerHTML={{ __html: description }} />
        </TabPanel>

        <TabPanel>
          <h3 style={{ marginTop: 0 }}>Floor Plan</h3>
          <div style={{ textAlign: 'center' }}>
            <img
              src={floorPlan}
              alt="Property Floor Plan"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}
            />
          </div>
        </TabPanel>

        <TabPanel>
          <h3 style={{ marginTop: 0 }}>Location Map</h3>
          <div style={{ width: '100%', height: '450px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border)' }}>
            {mapUrl ? (
              <iframe
                title="Property map"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', background: '#f5f5f5', color: '#666' }}>
                Map location not available
              </div>
            )}
          </div>
        </TabPanel>
      </Tabs>
      <style>{`
        .react-tabs__tab {
          background: transparent;
          border: none;
          border-bottom: 3px solid transparent;
          padding: 0.5rem 1rem;
          font-weight: 600;
          color: var(--text-light);
          cursor: pointer;
          font-size: 1.1rem;
        }
        .react-tabs__tab--selected {
          border-bottom-color: var(--accent);
          color: var(--primary);
          background: transparent;
        }
        .react-tabs__tab:focus {
          box-shadow: none;
          outline: none;
        }
        .react-tabs__tab:focus:after {
           display: none;
        }
      `}</style>
    </div>
  );
};

TabsSection.propTypes = {
  description: PropTypes.string.isRequired,
  floorPlan: PropTypes.string.isRequired,
  mapUrl: PropTypes.string.isRequired
};

export default TabsSection;
