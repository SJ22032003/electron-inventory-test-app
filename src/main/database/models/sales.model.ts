export default (sequelize: any, DataTypes: any) => {
  const Sales = sequelize.define(
    "Sales",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      sales_exe_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      invoice_no: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      customer_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      customer_phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sales_type: {
        type: DataTypes.STRING,
        allowNull: false,
        enum: ["cash", "credit", "online"],
      },
      sale_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("NOW()"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("NOW()"),
      },
    },
    {
      tableName: "sales",
    },
  );
  return Sales;
};
