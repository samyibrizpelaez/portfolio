varying vec3 vNormal;
            
void main( void ) 
{

    float intensity = pow(0.5 - dot(vNormal, vec3(0.0,0.0,1.0)),  18.0);

    float r = 1.0/256.0*0.0;
    float g = 1.0/256.0*44.0;
    float b = 1.0/256.0*83.0;

    vec4 earthBlue = vec4(r,g,b,1.0);

    gl_FragColor = earthBlue * intensity;

}