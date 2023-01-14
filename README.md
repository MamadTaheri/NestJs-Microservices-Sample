## DB Config for Typeorm

`app.module.ts`

    @Module({
    imports: [
        TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'SampleDB',
        synchronize: true,
        autoLoadEntities: true,
        }),
        SampleModule,
    ],
    controllers: [AppController],
    providers: [AppService],
    })
