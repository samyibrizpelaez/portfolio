varying vec3 vNormal;
            
void main( void ) 
{

    float intensity = pow(0.4- dot(vNormal, vec3(0.0,0.0,1.0)),  5.0);

    vec4 earthBlue = vec4(0.156,0.4603,0.6943,1.0);

    gl_FragColor = earthBlue * intensity;
}