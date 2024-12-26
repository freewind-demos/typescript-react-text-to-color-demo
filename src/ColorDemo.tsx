import React from 'react';
import { getColorFromText } from './colors';

const texts = [
    'Hello World',
    'Hello World',
    'hello world',
    'Hello, World!',
    'React is awesome',
    'TypeScript & React',
    '12345',
    'The quick brown fox',
    '你好，世界',
    'Lorem ipsum',
    '🌈 Rainbow',
    'UPPERCASE TEXT',
    'lowercase text',
    'This is a longer piece of text to show variation',
    'Short text'
]

export const ColorDemo: React.FC = () => {
    return (
        <div>
            <h1>文本转颜色演示</h1>
            <p >
                这个演示展示了如何将不同的文本转换为固定的颜色。
                相同的文本会得到相同的颜色，而不同的文本（即使只是很小的差异）会得到不同的颜色。
            </p>

            <div>
                {texts.map(it => <div style={{ padding: '10px', margin: '1px', backgroundColor: getColorFromText(it) }}>{it}</div>)}
            </div>
        </div>
    );
}; 