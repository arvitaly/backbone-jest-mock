declare module BackboneJestMock {
    interface CollectionStatic{
        new():Collection;
    }
    interface ModelStatic{
        new():Model;
    }    
    interface Collection {
        get: jest.Mock<any>;
        set: jest.Mock<any>;
        on: jest.Mock<any>;
        toJSON: jest.Mock<any>;
    }
    interface Model {
        get: jest.Mock<any>;
        set: jest.Mock<any>;
        on: jest.Mock<any>;
        toJSON: jest.Mock<any>;
    }
}
declare module 'backbone-jest-mock'{
    export var Collection:BackboneJestMock.CollectionStatic;
    export var Model:BackboneJestMock.ModelStatic;
}