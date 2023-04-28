import { App, Fn, TerraformStack } from 'cdktf'
import { Construct } from 'constructs'
import { RandomProvider } from '@cdktf/provider-random/lib/provider'
import { Id } from '@cdktf/provider-random/lib/id'

export class Demo extends TerraformStack {
    constructor (scope: Construct, name: string) {
        super(scope, name)
        new RandomProvider(this, 'random')
        new Id(this, 'id', {
            keepers: {
                first: Fn.timestamp()
            },
            byteLength: 8
        })
    }
}

const app = new App()
new Demo(app, 'demo')
app.synth()
