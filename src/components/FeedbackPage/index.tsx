import React, { useState } from "react";
import CustomTooltip from "../UI/Tooltip";
import CustomSpinner from "../UI/Spinner";
import CustomSkeleton from "../UI/Skeleton";
import CustomBadge from "../UI/Badge";

const FeedbackPage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '20px 0' }}>
      
      <section>
        <h3 style={{ marginBottom: '16px', fontFamily: 'sans-serif', fontSize: '24px' }}>Tooltip</h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: '20px' }}>
          <CustomTooltip content="Tooltip on Top" position="top">
            <span style={{ padding: '8px 16px', border: '1px solid #d9d9d9', borderRadius: '4px', cursor: 'pointer' }}>Hover me (Top)</span>
          </CustomTooltip>
          
          <CustomTooltip content="Tooltip on Bottom" position="bottom">
            <span style={{ padding: '8px 16px', border: '1px solid #d9d9d9', borderRadius: '4px', cursor: 'pointer' }}>Hover me (Bottom)</span>
          </CustomTooltip>

          <CustomTooltip content="Tooltip on Left" position="left">
            <span style={{ padding: '8px 16px', border: '1px solid #d9d9d9', borderRadius: '4px', cursor: 'pointer' }}>Hover me (Left)</span>
          </CustomTooltip>

          <CustomTooltip content="Tooltip on Right" position="right">
            <span style={{ padding: '8px 16px', border: '1px solid #d9d9d9', borderRadius: '4px', cursor: 'pointer' }}>Hover me (Right)</span>
          </CustomTooltip>
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: '16px', fontFamily: 'sans-serif', fontSize: '24px' }}>Spinner / Loader</h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <CustomSpinner />
          <CustomSpinner size={36} color="#52c41a" />
          <CustomSpinner size={48} color="#ff4d4f" />
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: '16px', fontFamily: 'sans-serif', fontSize: '24px' }}>Badge</h3>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', marginTop: '10px' }}>
          <CustomBadge count={5}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#f0f0f0', borderRadius: '8px' }} />
          </CustomBadge>

          <CustomBadge count={99} color="#52c41a">
            <div style={{ width: '40px', height: '40px', backgroundColor: '#f0f0f0', borderRadius: '8px' }} />
          </CustomBadge>

          <CustomBadge dot>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#f0f0f0', borderRadius: '8px' }} />
          </CustomBadge>

          <CustomBadge count="New" color="#1677ff">
            <div style={{ width: '40px', height: '40px', backgroundColor: '#f0f0f0', borderRadius: '8px' }} />
          </CustomBadge>
        </div>
      </section>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontFamily: 'sans-serif', margin: 0 }}>Skeleton</h3>
          <button 
            onClick={() => setLoading(!loading)}
            style={{ padding: '4px 12px', cursor: 'pointer' }}
          >
            Toggle Loading State
          </button>
        </div>

        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <CustomSkeleton shape="circle" width={48} height={48} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                <CustomSkeleton width="60%" height={16} />
                <CustomSkeleton width="40%" height={16} />
              </div>
            </div>
            <CustomSkeleton width="100%" height={100} />
          </div>
        ) : (
          <div style={{ maxWidth: '400px', border: '1px solid #d9d9d9', padding: '16px', borderRadius: '8px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#1677ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>UI</div>
              <div>
                <h4 style={{ margin: 0 }}>John Doe</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Software Engineer</p>
              </div>
            </div>
            <p style={{ margin: 0 }}>This is the actual loaded content. You can toggle the skeleton state using the button above to see the difference.</p>
          </div>
        )}
      </section>
      
    </div>
  );
};

export default FeedbackPage;
