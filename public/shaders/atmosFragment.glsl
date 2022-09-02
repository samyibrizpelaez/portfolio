
uniform vec3 customCameraPosition;
varying vec3 vNormal;

            
void main( void ) 
{

    float intensity = pow(0.1- dot(vNormal, customCameraPosition), 2.5);

    float r = 1.0/256.0*0.0;
    float g = 1.0/256.0*44.0;
    float b = 1.0/256.0*83.0;

    vec4 earthBlue = vec4(r,g,b,1.0);

    gl_FragColor = earthBlue * intensity;

}