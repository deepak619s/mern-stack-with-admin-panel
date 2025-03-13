export const AdminService = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form>
          <div className="form-group">
            <label htmlFor="name">Service Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter service name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter description"
              rows="4"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price (₹)</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter price"
              min="0"
              step="0.01"
              required
            />
          </div>
          <div className="modal-actions">
            <button type="button" className="cancel-btn">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
