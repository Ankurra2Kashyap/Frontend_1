// src/pages/Profile.jsx
import "../components/Bookmark.css";
export default function Profile() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="mb-3">Profile</h5>
  
          <div className="row g-3">
            <div className="col-12 col-lg-8">
              <div className="p-3 border rounded-3">
                <div className="row gy-2">
                  <div className="col-12 col-md-6 d-flex">
                    <div className="me-2 fw-semibold" style={{minWidth:120}}>Username:</div>
                    <div>XYZ</div>
                  </div>
                  <div className="col-12 col-md-6 d-flex">
                    <div className="me-2 fw-semibold" style={{minWidth:120}}>Full Name:</div>
                    <div>ABC XYZ</div>
                  </div>
                  <div className="col-12 col-md-6 d-flex">
                    <div className="me-2 fw-semibold" style={{minWidth:120}}>Role:</div>
                    <div>User</div>
                  </div>
                  <div className="col-12 col-md-6 d-flex">
                    <div className="me-2 fw-semibold" style={{minWidth:120}}>Email:</div>
                    <div>xyz@work.com</div>
                  </div>
                </div>
              </div>
  
              <div className="mt-3 d-flex align-items-center gap-2">
                <span className="small-muted">Contact Help</span>
                <a href="#" className="btn btn-sm btn-outline-secondary">✉️</a>
                <a href="#" className="btn btn-sm btn-outline-secondary">📞</a>
              </div>
            </div>
  
            <div className="col-12 col-lg-4">
              <div className="p-3 bg-light border rounded-3">
                <div className="fw-semibold mb-2">Security</div>
                <button className="btn btn-green w-100 mb-2">Change Password</button>
                <button className="btn btn-outline-secondary w-100">Manage Sessions</button>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  