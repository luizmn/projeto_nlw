import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1619123138586 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "messages",
                columns: [
                  { 
                      name: "id",
                      type: "uuid",
                      isPrimary: true,
                  },
                  {
                      name: "admin_id",
                      type: "uuid",
                      isNullable: true,
                  },
                  {
                      name: "user_id",
                      type: "uuid",
                  },
                  {
                      name: "text",
                      type: "varchar",
                  },
                  {
                      name: "created_at",
                      type: "timestamp",
                      default: "now()",
                  },
                ],
                foreignKeys: [
                    {
                        name: "FKUser", //chosen name
                        referencedTableName: "users", //table PK name
                        referencedColumnNames: ["id"], //referenced key
                        columnNames: ["user_id"], //referenced key in table created in this file
                        onDelete: "SET NULL", // what happens when you delete the value in table
                        onUpdate: "SET NULL",
                    }
                ]
            })
        ); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages");
    }

}
